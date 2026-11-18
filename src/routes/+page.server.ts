import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Resend } from 'resend';
import {
  RESEND_API_KEY,
  RESEND_TO,
  RESEND_FROM
} from '$app/env/private';


export const actions: Actions = {
  kirim: async ({ request }) => {
    const formData = await request.formData();

    const nama = String(formData.get('nama') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const pesan = String(formData.get('pesan') ?? '').trim();

    if (!nama || !email || !pesan) {
      return fail(400, {
        message: 'Semua kolom wajib diisi.'
      });
    }

    if (!RESEND_API_KEY || !RESEND_TO) {
      return fail(500, {
        message: 'Konfigurasi email belum tersedia.'
      });
    }

    try {
      const resend = new Resend(RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: RESEND_FROM || 'Portfolio <onboarding@resend.dev>',
        to: [RESEND_TO],
        replyTo: email,
        subject: `Pesan portfolio dari ${nama}`,
        text: `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`
      });

      if (error) {
        console.error('Resend error:', error);

        return fail(500, {
          message: 'Pesan gagal dikirim.'
        });
      }

      return {
        success: true
      };
    } catch (error) {
      console.error('Contact form error:', error);

      return fail(500, {
        message: 'Terjadi kesalahan saat mengirim pesan.'
      });
    }
  }
};
