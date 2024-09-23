import { BOT_URL } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  contactForm: async ({request, fetch}) => {
    const data = await request.formData()

    const name = data.get('name')
    const email = data.get('email')
    const company = data.get('company')
    const content = data.get('content')
    

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