
import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  RESEND_API_KEY: {
    description: 'Kunci API Resend. Rahasia, hanya untuk server.',
    schema: (value) => value ?? ''
  },
  RESEND_TO: {
    description: 'Email penerima pesan dari form kontak.',
    schema: (value) => value ?? ''
  },
  RESEND_FROM: {
    description: 'Alamat pengirim email dari Resend.',
    schema: (value) => value ?? ''
  }
});
