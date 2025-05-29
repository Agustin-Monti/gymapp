'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ChangePasswordPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    setLoading(false);

    if (error) {
      alert('Error al cambiar la contraseña: ' + error.message);
    } else {
      alert('Contraseña cambiada correctamente');
    }
  };

  return (
    <div>
      <h2>Cambiar Contraseña</h2>
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleChangePassword} disabled={loading}>
        {loading ? 'Cambiando...' : 'Cambiar Contraseña'}
      </button>
    </div>
  );
}
