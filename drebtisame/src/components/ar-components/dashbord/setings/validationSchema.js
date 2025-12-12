import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يحتوي على 3 أحرف على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, "رقم الهاتف يجب أن يبدأ بـ01 ويتكون من 11 رقمًا"),
});
