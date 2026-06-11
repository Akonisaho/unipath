'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Loader2, Search, Plus, X, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function UsersAdminPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showInviteForm, setShowInviteForm] = useState(false)
  const [inviting, setInviting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [newAdmin, setNewAdmin] = useState<{ email: string; tempPassword: string } | null>(null)
  const [inviteForm, setInviteForm] = useState({ fullName: '', email: '' })

  const fetchUsers = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
    setUsers(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchUsers() }, [])

  const generateTempPassword = () => {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789@#$'
    return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  }

  const handleInviteAdmin = async () => {
    if (!inviteForm.fullName || !inviteForm.email) {
      toast.error('Please fill in all fields')
      return
    }
    setInviting(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const tempPassword = generateTempPassword()

      // Create the user account
      const { data: newUser, error: signUpError } = await supabase.auth.admin?.createUser({
        email: inviteForm.email,
        password: tempPassword,
        email_confirm: true,
        user_metadata: { full_name: inviteForm.fullName },
      }) as any

      if (signUpError) {
        // If admin API not available use regular signup
        const { data: signUpData, error } = await supabase.auth.signUp({
          email: inviteForm.email,
          password: tempPassword,
          options: {
            data: { full_name: inviteForm.fullName }
          }
        })
        if (error) throw error

        if (signUpData.user) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          await supabase.from('profiles').upsert({
            id: signUpData.user.id,
            email: inviteForm.email,
            full_name: inviteForm.fullName,
            role: 'admin',
            invited_by: user.id,
            temp_password_changed: false,
            onboarding_complete: true,
            onboarding_step: 6,
          })
        }
      } else if (newUser?.user) {
        await supabase.from('profiles').upsert({
          id: newUser.user.id,
          email: inviteForm.email,
          full_name: inviteForm.fullName,
          role: 'admin',
          invited_by: user.id,
          temp_password_changed: false,
          onboarding_complete: true,
          onboarding_step: 6,
        })
      }

      // Save invite record
      await supabase.from('admin_invites').insert({
        email: inviteForm.email,
        full_name: inviteForm.fullName,
        temp_password: tempPassword,
        invited_by: user.id,
      })

      setNewAdmin({ email: inviteForm.email, tempPassword })
      setInviteForm({ fullName: '', email: '' })
      toast.success('Admin account created!')
      fetchUsers()
    } catch (error: any) {
      toast.error(error.message || 'Failed to create admin')
    } finally {
      setInviting(false)
    }
  }

  const copyCredentials = () => {
    if (!newAdmin) return
    const text = `UniPath Admin Access\n\nEmail: ${newAdmin.email}\nTemp Password: ${newAdmin.tempPassword}\n\nLogin at: ${window.location.origin}/login\nPlease change your password after first login.`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success('Credentials copied!')
  }

  const filtered = users.filter(u =>
    u.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.province?.toLowerCase().includes(search.toLowerCase())
  )

  const admins = filtered.filter(u => u.role === 'admin')
  const students = filtered.filter(u => u.role !== 'admin')

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500 text-sm mt-1">
            {admins.length} admins Â· {students.length} learners
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search users..."
              className="border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button
            onClick={() => setShowInviteForm(true)}
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 transition-all"
          >
            <Plus size={16} /> Add Admin
          </button>
        </div>
      </div>

      {/* Invite Form */}
      {showInviteForm && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-800">Invite New Admin</h2>
            <button onClick={() => { setShowInviteForm(false); setNewAdmin(null) }} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          {newAdmin ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <p className="text-sm font-bold text-green-800 mb-3">âœ… Admin account created!</p>
              <p className="text-xs text-green-700 mb-1">Share these credentials securely:</p>
              <div className="bg-white border border-green-200 rounded-xl p-4 mb-4 font-mono text-sm">
                <p><span className="text-gray-500">Email:</span> {newAdmin.email}</p>
                <p><span className="text-gray-500">Password:</span> {newAdmin.tempPassword}</p>
                <p><span className="text-gray-500">Login:</span> {window.location.origin}/login</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyCredentials}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700"
                >
                  {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy Credentials</>}
                </button>
                <button
                  onClick={() => { setNewAdmin(null); setShowInviteForm(false) }}
                  className="border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm hover:bg-gray-50"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={inviteForm.fullName}
                    onChange={e => setInviteForm(p => ({ ...p, fullName: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={inviteForm.email}
                    onChange={e => setInviteForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="admin@unipath.co.za"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-xs text-red-700">
                  âš ï¸ A temporary password will be generated. Share it securely with the new admin â€” they must change it after first login.
                </p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowInviteForm(false)} className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
                <button
                  onClick={handleInviteAdmin}
                  disabled={inviting}
                  className="w-2/3 bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {inviting ? <><Loader2 size={16} className="animate-spin" /> Creating...</> : 'Create Admin Account'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={24} className="animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Admins */}
          {admins.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Admins</p>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Name</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Email</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Status</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {admins.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-900">{user.full_name || 'â€”'}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Admin</span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-gray-500">{new Date(user.created_at).toLocaleDateString('en-ZA')}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Students */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Learners ({students.length})
            </p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Name</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Email</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Province</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">School</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Onboarding</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-gray-400 text-sm">No learners registered yet</td>
                    </tr>
                  ) : students.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-gray-900">{user.full_name || 'â€”'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-gray-500">{user.province || 'â€”'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-gray-500">{user.school_name || 'â€”'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          user.onboarding_complete
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {user.onboarding_complete ? 'âœ… Complete' : `Step ${user.onboarding_step || 1}`}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-gray-500">{new Date(user.created_at).toLocaleDateString('en-ZA')}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}