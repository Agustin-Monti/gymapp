'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function ChangePasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionSet, setSessionSet] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

 useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1)); // remove the '#'
    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');
  
    console.log('access_token:', access_token);
    console.log('refresh_token:', refresh_token);
  
    if (access_token && refresh_token) {
      supabase.auth.setSession({
        access_token,
        refresh_token,
      }).then(({ error }) => {
        if (error) {
          console.error('Error al establecer la sesión:', error);
          setError('Error al establecer la sesión. ' + error.message);
        } else {
          setSessionSet(true);
        }
      });
    } else {
      setError('Token inválido o faltante en la URL.');
    }
  }, []);




  const handlePasswordChange = async () => {
    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (error) {
      setError('No se pudo actualizar la contraseña.')
    } else {
      setSuccess(true)
      setPassword('')
      setTimeout(() => router.push('/login'), 3000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Cambiar Contraseña</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        {success ? (
          <div className="text-green-600">
            ✅ Contraseña actualizada correctamente. Serás redirigido al login...
          </div>
        ) : sessionSet ? (
          <>
            <label className="block text-sm font-medium mb-1">
              Nueva Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordChange}
              disabled={loading || password.length < 6}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Actualizando...' : 'Cambiar Contraseña'}
            </button>
          </>
        ) : (
          <p className="text-gray-600">Verificando enlace...</p>
        )}
      </div>
    </div>
  )
}
