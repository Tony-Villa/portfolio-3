import { BOT_URL } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  contactForm: async ({request, fetch}) => {
    const data = await request.formData()

    const name = data.get('name')
    const email = data.get('email')
    const company = data.get('company')
    const content = data.get('content')

    if (!name || !email || !company || !content) {
      return {
        status: 400,
        body: { error: 'All fields are required.' }
      };
    }

    if (name.toString().includes('Eric Jones')) {
      return {
        status: 400,
      };
    }

    if(name.toString() === company.toString()) {
      return {
        status: 400,
      }
    }

    const emailAccountsToIgnore = [
      '@gmail.com',
      '@yahoo.com',
      '@hotmail.com',
      '@outlook.com',
      '@icloud.com',
    ]

    if (emailAccountsToIgnore.some(account => email.toString().includes(account))) {
      return {
        status: 400,
      };
    }
    

    const embedContact = {
      title: `${name} - ${company}`,
      description: content?.toString(),
      email: email?.toString(),
    };

    await fetch(BOT_URL, {
      method: 'POST',
      body: JSON.stringify(embedContact),
    })
  }
};