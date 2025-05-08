import { Listbox } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'

const languages = [
  {
    name: 'English (United States)', 
    value: 'en-US',
    flag: 'https://flagcdn.com/w40/us.png',
  },
  {
    name: 'Spanish (Spain)',
    value: 'es-ES', 
    flag: 'https://flagcdn.com/w40/es.png',
  },
  {
    name: 'French (France)',
    value: 'fr-FR',
    flag: 'https://flagcdn.com/w40/fr.png',
  },
  {
    name: 'German (Germany)',
    value: 'de-DE',
    flag: 'https://flagcdn.com/w40/de.png',
  },
  {
    name: 'Hindi (India)',
    value: 'hi-IN',
    flag: 'https://flagcdn.com/w40/in.png',
  },
]

export default function AgentLanguageDropdown() {
  const [selected, setSelected] = useState(languages[0])

  return (
    <div className="w-full max-w-sm">
      <label className="block font-bold text-[14px] text-[#333333DE] leading-[17px] font-inter mb-1">
        Agent Language
      </label>
      <p className="text-xs text-gray-500 mb-2">
        Choose the default language the agent will communicate
      </p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-10 pr-8 text-left focus:outline-none focus:ring-2 focus:ring-purple-500">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full overflow-hidden border border-gray-200">
              <img src={selected.flag} alt="flag" className="w-full h-full object-cover" />
            </span>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <MdKeyboardArrowDown size={20} className="text-gray-600" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.value}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-purple-50 text-black' : 'text-gray-900'
                  }`
                }
                value={lang}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                    >
                      {lang.name}
                    </span>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                      <img src={lang.flag} alt="flag" className="w-full h-full object-cover" />
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
