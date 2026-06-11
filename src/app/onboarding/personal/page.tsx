'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, Search } from 'lucide-react'
import toast from 'react-hot-toast'

const PROVINCES = ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape']
const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say']
const RACES = ['Black African', 'Coloured', 'Indian/Asian', 'White', 'Prefer not to say']
const LANGUAGES = ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Sepedi', 'Tswana', 'Sotho', 'Tsonga', 'Swati', 'Venda', 'Ndebele']
const SCHOOL_TYPES = ['Public', 'Private', 'Model C']

const SA_CITIES = [
  // Tshwane / Pretoria suburbs
  { city: 'Pretoria CBD', postal: '0001', province: 'Gauteng' },
  { city: 'Pretoria North', postal: '0182', province: 'Gauteng' },
  { city: 'Pretoria West', postal: '0183', province: 'Gauteng' },
  { city: 'Pretoria East', postal: '0081', province: 'Gauteng' },
  { city: 'Arcadia', postal: '0083', province: 'Gauteng' },
  { city: 'Hatfield', postal: '0028', province: 'Gauteng' },
  { city: 'Sunnyside', postal: '0132', province: 'Gauteng' },
  { city: 'Menlyn', postal: '0181', province: 'Gauteng' },
  { city: 'Centurion', postal: '0046', province: 'Gauteng' },
  { city: 'Atteridgeville', postal: '0008', province: 'Gauteng' },
  { city: 'Mamelodi', postal: '0122', province: 'Gauteng' },
  { city: 'Soshanguve', postal: '0152', province: 'Gauteng' },
  { city: 'Garankuwa', postal: '0208', province: 'Gauteng' },
  { city: 'Mabopane', postal: '0190', province: 'Gauteng' },
  { city: 'Wonderboom', postal: '0084', province: 'Gauteng' },
  { city: 'Silverton', postal: '0127', province: 'Gauteng' },
  { city: 'Gezina', postal: '0031', province: 'Gauteng' },
  { city: 'Lynnwood', postal: '0081', province: 'Gauteng' },
  { city: 'Brooklyn', postal: '0181', province: 'Gauteng' },
  { city: 'Waterkloof', postal: '0145', province: 'Gauteng' },
  { city: 'Irene', postal: '0062', province: 'Gauteng' },
  { city: 'Faerie Glen', postal: '0043', province: 'Gauteng' },
  { city: 'Erasmuskloof', postal: '0048', province: 'Gauteng' },
  { city: 'Montana', postal: '0182', province: 'Gauteng' },
  { city: 'Queenswood', postal: '0186', province: 'Gauteng' },
  { city: 'Tshwane', postal: '0001', province: 'Gauteng' },

  // Johannesburg suburbs
  { city: 'Johannesburg CBD', postal: '2000', province: 'Gauteng' },
  { city: 'Sandton', postal: '2196', province: 'Gauteng' },
  { city: 'Soweto', postal: '1804', province: 'Gauteng' },
  { city: 'Randburg', postal: '2194', province: 'Gauteng' },
  { city: 'Roodepoort', postal: '1724', province: 'Gauteng' },
  { city: 'Fourways', postal: '2191', province: 'Gauteng' },
  { city: 'Midrand', postal: '1685', province: 'Gauteng' },
  { city: 'Alexandra', postal: '2090', province: 'Gauteng' },
  { city: 'Diepsloot', postal: '2189', province: 'Gauteng' },
  { city: 'Orange Farm', postal: '1841', province: 'Gauteng' },
  { city: 'Lenasia', postal: '1827', province: 'Gauteng' },
  { city: 'Dobsonville', postal: '1863', province: 'Gauteng' },
  { city: 'Naturena', postal: '1950', province: 'Gauteng' },
  { city: 'Eldorado Park', postal: '1811', province: 'Gauteng' },
  { city: 'Parktown', postal: '2193', province: 'Gauteng' },
  { city: 'Rosebank', postal: '2196', province: 'Gauteng' },
  { city: 'Melville', postal: '2092', province: 'Gauteng' },
  { city: 'Norwood', postal: '2192', province: 'Gauteng' },
  { city: 'Braamfontein', postal: '2001', province: 'Gauteng' },
  { city: 'Yeoville', postal: '2198', province: 'Gauteng' },
  { city: 'Hillbrow', postal: '2038', province: 'Gauteng' },
  { city: 'Fordsburg', postal: '2092', province: 'Gauteng' },

  // Ekurhuleni
  { city: 'Boksburg', postal: '1459', province: 'Gauteng' },
  { city: 'Benoni', postal: '1500', province: 'Gauteng' },
  { city: 'Germiston', postal: '1400', province: 'Gauteng' },
  { city: 'Alberton', postal: '1449', province: 'Gauteng' },
  { city: 'Springs', postal: '1559', province: 'Gauteng' },
  { city: 'Brakpan', postal: '1540', province: 'Gauteng' },
  { city: 'Edenvale', postal: '1609', province: 'Gauteng' },
  { city: 'Kempton Park', postal: '1619', province: 'Gauteng' },
  { city: 'Tembisa', postal: '1628', province: 'Gauteng' },
  { city: 'Daveyton', postal: '1507', province: 'Gauteng' },
  { city: 'Katlehong', postal: '1832', province: 'Gauteng' },
  { city: 'Thokoza', postal: '1426', province: 'Gauteng' },
  { city: 'Vosloorus', postal: '1475', province: 'Gauteng' },

  // Sedibeng
  { city: 'Vanderbijlpark', postal: '1900', province: 'Gauteng' },
  { city: 'Vereeniging', postal: '1930', province: 'Gauteng' },
  { city: 'Evaton', postal: '1984', province: 'Gauteng' },
  { city: 'Sebokeng', postal: '1983', province: 'Gauteng' },
  { city: 'Sharpeville', postal: '1930', province: 'Gauteng' },

  // West Rand
  { city: 'Krugersdorp', postal: '1739', province: 'Gauteng' },
  { city: 'Randfontein', postal: '1760', province: 'Gauteng' },
  { city: 'Westonaria', postal: '1780', province: 'Gauteng' },

  // Cape Town suburbs
  { city: 'Cape Town CBD', postal: '8000', province: 'Western Cape' },
  { city: 'Bellville', postal: '7530', province: 'Western Cape' },
  { city: 'Mitchells Plain', postal: '7785', province: 'Western Cape' },
  { city: 'Khayelitsha', postal: '7784', province: 'Western Cape' },
  { city: 'Gugulethu', postal: '7750', province: 'Western Cape' },
  { city: 'Langa', postal: '7455', province: 'Western Cape' },
  { city: 'Wynberg', postal: '7800', province: 'Western Cape' },
  { city: 'Claremont', postal: '7708', province: 'Western Cape' },
  { city: 'Rondebosch', postal: '7700', province: 'Western Cape' },
  { city: 'Observatory', postal: '7925', province: 'Western Cape' },
  { city: 'Sea Point', postal: '8060', province: 'Western Cape' },
  { city: 'Green Point', postal: '8051', province: 'Western Cape' },
  { city: 'Stellenbosch', postal: '7600', province: 'Western Cape' },
  { city: 'Paarl', postal: '7620', province: 'Western Cape' },
  { city: 'Worcester', postal: '6850', province: 'Western Cape' },
  { city: 'George', postal: '6530', province: 'Western Cape' },
  { city: 'Knysna', postal: '6570', province: 'Western Cape' },
  { city: 'Mossel Bay', postal: '6500', province: 'Western Cape' },

  // Durban suburbs
  { city: 'Durban CBD', postal: '4001', province: 'KwaZulu-Natal' },
  { city: 'Umhlanga', postal: '4320', province: 'KwaZulu-Natal' },
  { city: 'Pinetown', postal: '3600', province: 'KwaZulu-Natal' },
  { city: 'Phoenix', postal: '4068', province: 'KwaZulu-Natal' },
  { city: 'Umlazi', postal: '4031', province: 'KwaZulu-Natal' },
  { city: 'Chatsworth', postal: '4030', province: 'KwaZulu-Natal' },
  { city: 'Tongaat', postal: '4399', province: 'KwaZulu-Natal' },
  { city: 'Amanzimtoti', postal: '4126', province: 'KwaZulu-Natal' },
  { city: 'Pietermaritzburg', postal: '3200', province: 'KwaZulu-Natal' },
  { city: 'Richards Bay', postal: '3900', province: 'KwaZulu-Natal' },
  { city: 'Newcastle', postal: '2940', province: 'KwaZulu-Natal' },
  { city: 'Empangeni', postal: '3880', province: 'KwaZulu-Natal' },

  // Eastern Cape
  { city: 'Port Elizabeth CBD', postal: '6001', province: 'Eastern Cape' },
  { city: 'Gqeberha', postal: '6001', province: 'Eastern Cape' },
  { city: 'Uitenhage', postal: '6230', province: 'Eastern Cape' },
  { city: 'East London', postal: '5200', province: 'Eastern Cape' },
  { city: 'Mthatha', postal: '5100', province: 'Eastern Cape' },
  { city: 'Queenstown', postal: '5320', province: 'Eastern Cape' },
  { city: 'King Williams Town', postal: '5600', province: 'Eastern Cape' },
  { city: 'Grahamstown', postal: '6139', province: 'Eastern Cape' },
  { city: 'Mdantsane', postal: '5219', province: 'Eastern Cape' },

  // Free State
  { city: 'Bloemfontein', postal: '9300', province: 'Free State' },
  { city: 'Welkom', postal: '9460', province: 'Free State' },
  { city: 'Botshabelo', postal: '9781', province: 'Free State' },
  { city: 'Thaba Nchu', postal: '9780', province: 'Free State' },
  { city: 'Kroonstad', postal: '9499', province: 'Free State' },

  // Limpopo
  { city: 'Polokwane', postal: '0699', province: 'Limpopo' },
  { city: 'Tzaneen', postal: '0850', province: 'Limpopo' },
  { city: 'Thohoyandou', postal: '0950', province: 'Limpopo' },
  { city: 'Lephalale', postal: '0555', province: 'Limpopo' },
  { city: 'Mokopane', postal: '0600', province: 'Limpopo' },
  { city: 'Bela-Bela', postal: '0480', province: 'Limpopo' },
  { city: 'Giyani', postal: '0826', province: 'Limpopo' },

  // Mpumalanga
  { city: 'Nelspruit', postal: '1200', province: 'Mpumalanga' },
  { city: 'Mbombela', postal: '1200', province: 'Mpumalanga' },
  { city: 'Witbank', postal: '1035', province: 'Mpumalanga' },
  { city: 'eMalahleni', postal: '1035', province: 'Mpumalanga' },
  { city: 'Secunda', postal: '2302', province: 'Mpumalanga' },
  { city: 'Middelburg', postal: '1050', province: 'Mpumalanga' },
  { city: 'Ermelo', postal: '2350', province: 'Mpumalanga' },

  // North West
  { city: 'Rustenburg', postal: '0299', province: 'North West' },
  { city: 'Klerksdorp', postal: '2570', province: 'North West' },
  { city: 'Potchefstroom', postal: '2520', province: 'North West' },
  { city: 'Mahikeng', postal: '2745', province: 'North West' },
  { city: 'Brits', postal: '0250', province: 'North West' },

  // Northern Cape
  { city: 'Kimberley', postal: '8300', province: 'Northern Cape' },
  { city: 'Upington', postal: '8800', province: 'Northern Cape' },
  { city: 'Springbok', postal: '8240', province: 'Northern Cape' },
  { city: 'De Aar', postal: '7000', province: 'Northern Cape' },
]
const Field = ({ label, error, required, children }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
)

export default function PersonalDetailsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [citySearch, setCitySearch] = useState('')
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const cityRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    race: '',
    homeLanguage: '',
    nationality: 'South African',
    idNumber: '',
    phone: '',
    address: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    province: '',
    schoolName: '',
    schoolType: '',
    disability: 'None',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const filteredCities = SA_CITIES.filter(c =>
    c.city.toLowerCase().includes(citySearch.toLowerCase()) ||
    c.province.toLowerCase().includes(citySearch.toLowerCase())
  )

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      if (profile) {
        const nameParts = profile.full_name?.split(' ') || []
        setForm(prev => ({
          ...prev,
          firstName: profile.first_name || nameParts[0] || '',
          lastName: profile.last_name || nameParts.slice(1).join(' ') || '',
          phone: profile.phone || '',
          idNumber: profile.id_number || '',
          province: profile.province || '',
          schoolName: profile.school_name || '',
          address: profile.address || '',
          addressLine2: profile.address_line2 || '',
          city: profile.city || '',
          postalCode: profile.postal_code || '',
          gender: profile.gender || '',
          race: profile.race || '',
          homeLanguage: profile.home_language || '',
          nationality: profile.nationality || 'South African',
          disability: profile.disability || 'None',
          schoolType: profile.school_type || '',
          dateOfBirth: profile.date_of_birth || '',
        }))
        if (profile.city) setCitySearch(profile.city)
      }
    }
    loadProfile()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setShowCityDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectCity = (item: typeof SA_CITIES[0]) => {
    setCitySearch(item.city)
    setForm(prev => ({
      ...prev,
      city: item.city,
      postalCode: item.postal,
      province: item.province,
    }))
    setShowCityDropdown(false)
    if (errors.city) setErrors(prev => ({ ...prev, city: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.firstName) newErrors.firstName = 'First name is required'
    if (!form.lastName) newErrors.lastName = 'Last name is required'
    if (!form.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!form.gender) newErrors.gender = 'Gender is required'
    if (!form.race) newErrors.race = 'Race is required'
    if (!form.homeLanguage) newErrors.homeLanguage = 'Home language is required'
    if (!form.nationality) newErrors.nationality = 'Nationality is required'
    if (!form.idNumber) {
      newErrors.idNumber = 'ID number is required'
    } else if (!/^\d{13}$/.test(form.idNumber)) {
      newErrors.idNumber = 'ID number must be exactly 13 digits'
    } else if (form.dateOfBirth) {
      const idYear = form.idNumber.substring(0, 2)
      const idMonth = form.idNumber.substring(2, 4)
      const idDay = form.idNumber.substring(4, 6)
      const dob = new Date(form.dateOfBirth)
      const dobYear = dob.getFullYear().toString().slice(-2)
      const dobMonth = String(dob.getMonth() + 1).padStart(2, '0')
      const dobDay = String(dob.getDate()).padStart(2, '0')
      if (idYear !== dobYear || idMonth !== dobMonth || idDay !== dobDay) {
        newErrors.idNumber = 'ID number does not match your date of birth'
      }
    }
    if (!form.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits'
    }
    if (!form.address) newErrors.address = 'Street address is required'
    if (!form.city) newErrors.city = 'City is required'
    if (!form.postalCode) newErrors.postalCode = 'Postal code is required'
    if (!form.province) newErrors.province = 'Province is required'
    if (!form.schoolName) newErrors.schoolName = 'School name is required'
    if (!form.schoolType) newErrors.schoolType = 'School type is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'idNumber') {
      if (!/^\d*$/.test(value)) return
      if (value.length > 13) return
    }
    if (name === 'phone') {
      if (!/^[\d\s]*$/.test(value)) return
      if (value.replace(/\s/g, '').length > 10) return
    }
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      toast.error('Please fill in all required fields correctly')
      return
    }
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: form.firstName,
          last_name: form.lastName,
          full_name: `${form.firstName} ${form.lastName}`,
          date_of_birth: form.dateOfBirth,
          gender: form.gender,
          race: form.race,
          home_language: form.homeLanguage,
          nationality: form.nationality,
          id_number: form.idNumber,
          phone: form.phone,
          address: form.address,
          address_line2: form.addressLine2,
          city: form.city,
          postal_code: form.postalCode,
          province: form.province,
          school_name: form.schoolName,
          school_type: form.schoolType,
          disability: form.disability,
          onboarding_step: 2,
        })
        .eq('id', user.id)
      if (error) throw error
      router.push('/onboarding/guardian')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        {['Personal', 'Guardian', 'Matric', 'Documents', 'Interests'].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              i === 0 ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              {i + 1}
            </div>
            <span className={`ml-1 text-xs hidden sm:block ${
              i === 0 ? 'text-blue-900 font-semibold' : 'text-gray-400'
            }`}>{step}</span>
            {i < 4 && <div className="w-4 sm:w-8 h-px bg-gray-200 mx-1" />}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Personal Details</h2>
      <p className="text-gray-500 text-sm mb-6">Tell us about yourself — this will auto-fill your university applications</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="First Name" error={errors.firstName} required>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jaycee" className={inputClass('firstName')} />
          </Field>
          <Field label="Last Name" error={errors.lastName} required>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Ngwana" className={inputClass('lastName')} />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Date of Birth" error={errors.dateOfBirth} required>
            <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className={inputClass('dateOfBirth')} />
          </Field>
          <Field label="Gender" error={errors.gender} required>
            <select name="gender" value={form.gender} onChange={handleChange} className={`${inputClass('gender')} bg-white`}>
              <option value="">Select gender</option>
              {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Race" error={errors.race} required>
            <select name="race" value={form.race} onChange={handleChange} className={`${inputClass('race')} bg-white`}>
              <option value="">Select race</option>
              {RACES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Home Language" error={errors.homeLanguage} required>
            <select name="homeLanguage" value={form.homeLanguage} onChange={handleChange} className={`${inputClass('homeLanguage')} bg-white`}>
              <option value="">Select language</option>
              {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Nationality" error={errors.nationality} required>
            <input type="text" name="nationality" value={form.nationality} onChange={handleChange} placeholder="South African" className={inputClass('nationality')} />
          </Field>
          <Field label="SA ID Number" error={errors.idNumber} required>
            <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} placeholder="0000000000000" maxLength={13} className={inputClass('idNumber')} />
          </Field>
        </div>

        <Field label="Phone Number" error={errors.phone} required>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="0812345678" maxLength={10} className={inputClass('phone')} />
        </Field>

        <Field label="Street Address" error={errors.address} required>
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street" className={inputClass('address')} />
        </Field>

        <Field label="Address Line 2" error={errors.addressLine2}>
          <input type="text" name="addressLine2" value={form.addressLine2} onChange={handleChange} placeholder="Suburb / Township (optional)" className={inputClass('addressLine2')} />
        </Field>

        {/* City Search */}
        <div className="grid grid-cols-2 gap-4">
          <Field label="City / Town" error={errors.city} required>
            <div ref={cityRef} className="relative">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  value={citySearch}
                  onChange={e => {
                    setCitySearch(e.target.value)
                    setShowCityDropdown(true)
                    if (!e.target.value) {
                      setForm(prev => ({ ...prev, city: '', postalCode: '', province: '' }))
                    }
                  }}
                  onFocus={() => setShowCityDropdown(true)}
                  placeholder="Search city..."
                  className={`${inputClass('city')} pl-9`}
                />
              </div>
              {showCityDropdown && filteredCities.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 max-h-48 overflow-y-auto">
                  {filteredCities.map((item, index) => (
                    <button
                      key={`${item.city}-${index}`}
                      type="button"
                      onClick={() => selectCity(item)}
                      className="w-full text-left px-4 py-2.5 hover:bg-blue-50 transition-colors flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-800">{item.city}</span>
                      <span className="text-xs text-gray-400">{item.province} · {item.postal}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Field>

          <Field label="Postal Code" error={errors.postalCode} required>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="Auto-filled"
              maxLength={4}
              className={`${inputClass('postalCode')} bg-gray-50`}
              readOnly={!!form.city}
            />
          </Field>
        </div>

        <Field label="Province" error={errors.province} required>
          <select
            name="province"
            value={form.province}
            onChange={handleChange}
            className={`${inputClass('province')} bg-white`}
          >
            <option value="">Select province</option>
            {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="School Name" error={errors.schoolName} required>
            <input type="text" name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="Your high school" className={inputClass('schoolName')} />
          </Field>
          <Field label="School Type" error={errors.schoolType} required>
            <select name="schoolType" value={form.schoolType} onChange={handleChange} className={`${inputClass('schoolType')} bg-white`}>
              <option value="">Select type</option>
              {SCHOOL_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Disability Status" required>
          <select
            name="disability"
            value={form.disability.startsWith('Other') ? 'Other' : form.disability}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="None">No disability</option>
            <option value="Visual">Visual impairment</option>
            <option value="Hearing">Hearing impairment</option>
            <option value="Physical">Physical disability</option>
            <option value="Intellectual">Intellectual disability</option>
            <option value="Other">Other</option>
          </select>
          {(form.disability === 'Other' || form.disability.startsWith('Other:')) && (
            <input
              type="text"
              placeholder="Please describe your disability"
              value={form.disability.startsWith('Other:') ? form.disability.replace('Other: ', '') : ''}
              onChange={e => setForm(prev => ({ ...prev, disability: `Other: ${e.target.value}` }))}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          )}
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
        >
          {loading ? <><Loader2 size={20} className="animate-spin" /> Saving...</> : 'Next — Guardian Details →'}
        </button>
      </form>
    </div>
  )
}