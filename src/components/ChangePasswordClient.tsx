'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ChangePasswordClient() {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    // Verificamos que exista una sesión activa temporal
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error || !data.session) {
        setMessage('❌ Enlace inválido o expirado. Intenta nuevamente desde la app.')
      } else {
        setSessionReady(true)
      }
    }

    checkSession()
  }, [])

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setMessage(`Error al cambiar contraseña: ${error.message}`)
    } else {
      setMessage('✅ Contraseña cambiada con éxito. Ya puedes volver a la app.')
    }
  }

  if (message) return <p>{message}</p>

  return sessionReady ? (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Nueva contraseña</h2>
      <input
        type="password"
        className="p-2 border rounded"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleChangePassword}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cambiar contraseña
      </button>
    </div>
  ) : (
    <p>🔒 Validando enlace...</p>
  )
}
