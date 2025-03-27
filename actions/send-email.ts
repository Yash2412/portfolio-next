"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

// Type for form data
export type FormData = z.infer<typeof formSchema>

// Type for form response
export type FormResponse = {
  success: boolean
  message: string
}

export async function sendEmail(formData: FormData): Promise<FormResponse> {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please check the form for errors and try again.",
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // In a real implementation, you would send an email here using a service like
    // Nodemailer, SendGrid, Resend, etc.

    // For demonstration, we'll simulate a successful email send
    // with a slight delay to mimic network request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Email sent with the following data:", {
      name,
      email,
      subject,
      message,
    })

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}

