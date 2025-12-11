"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  typeOfSpace: string;
  projectType: string;
  projectAddress: string;
  preferredTimeline: string;
  isDecisionMaker: string;
  message: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form Data:", data);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, formType: 'inquiry' }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      console.log('Email sent successfully:', result);
      toast.success('Thank you! Your message has been sent successfully.');
      reset();
      router.push("/inquire/thank-you");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="col-span-6 bg-white shadow1 rounded-2xl md:p-8 px-6 py-8 max-md:order-first text-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <label className="block mb-1.5">First Name<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters"
                }
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">Last Name<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters"
                }
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">Email Address<span className="text-red-500">*</span></label>
            <Input
              type="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">Company Name<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("companyName", {
                required: "Company name is required",
                minLength: {
                  value: 2,
                  message: "Company name must be at least 2 characters"
                }
              })}
              aria-invalid={errors.companyName ? "true" : "false"}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">
              Type of Space<span className="text-red-500">*</span>
            </label>
            <Controller
              name="typeOfSpace"
              control={control}
              rules={{ required: "Please select a type of space" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" aria-invalid={errors.typeOfSpace ? "true" : "false"}>
                    <SelectValue placeholder="Select type of space" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="window-type">Window Type</SelectItem>
                    <SelectItem value="split-type">Split Type</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.typeOfSpace && (
              <p className="text-red-500 text-sm mt-1">{errors.typeOfSpace.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">
              Project Type<span className="text-red-500">*</span>
            </label>
            <Controller
              name="projectType"
              control={control}
              rules={{ required: "Please select a project type" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" aria-invalid={errors.projectType ? "true" : "false"}>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="work">Work</SelectItem>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
            )}
          </div>
          <div className="col-span-12">
            <label className="block mb-1.5">Project Address / Location<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("projectAddress", {
                required: "Project address is required",
                minLength: {
                  value: 5,
                  message: "Project address must be at least 5 characters"
                }
              })}
              aria-invalid={errors.projectAddress ? "true" : "false"}
            />
            {errors.projectAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.projectAddress.message}</p>
            )}
          </div>
          <div className="col-span-12">
            <label className="block mb-1.5">Preferred Timeline<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("preferredTimeline", {
                required: "Preferred timeline is required",
                minLength: {
                  value: 3,
                  message: "Please provide a timeline"
                }
              })}
              aria-invalid={errors.preferredTimeline ? "true" : "false"}
            />
            {errors.preferredTimeline && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredTimeline.message}</p>
            )}
          </div>
          <div className="col-span-12">
            <label className="block mb-1.5">
              Are you the decision maker?<span className="text-red-500">*</span>
            </label>
            <Controller
              name="isDecisionMaker"
              control={control}
              rules={{ required: "Please select an option" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" aria-invalid={errors.isDecisionMaker ? "true" : "false"}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.isDecisionMaker && (
              <p className="text-red-500 text-sm mt-1">{errors.isDecisionMaker.message}</p>
            )}
          </div>
          <div className="col-span-12">
            <label className="block mb-1.5">Message<span className="text-red-500">*</span></label>
            <Textarea
              className="h-32"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          <div className="col-span-12 text-gray-800">
            <p className="text-sm">
              By submitting, I agree to the processing and transfer of my personal data by Aircon Experts as described in the <Link href="/privacy-policy" className="text-primary">Privacy Policy</Link>
            </p>
          </div>
          <div className="col-span-12">
            <Button type="submit" size="lg" className="px-20" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
