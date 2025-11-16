"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  phoneNumber: string;
  region: string;
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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form Data:", data);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      console.log('Email sent successfully:', result);
      toast.success('Thank you! Your message has been sent successfully.');
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Phone number validation regex (supports various formats including Philippine numbers)
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

  return (
    <div className="col-span-6 bg-white shadow1 rounded-2xl md:-mt-20 -mt-45 md:p-8 px-6 py-8 max-md:order-first">
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
            <label className="block mb-1.5">Job Title<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("jobTitle", {
                required: "Job title is required",
                minLength: {
                  value: 2,
                  message: "Job title must be at least 2 characters"
                }
              })}
              aria-invalid={errors.jobTitle ? "true" : "false"}
            />
            {errors.jobTitle && (
              <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block mb-1.5">Phone Number<span className="text-red-500">*</span></label>
            <Input
              type="text"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: phoneRegex,
                  message: "Please enter a valid phone number"
                }
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="col-span-12">
            <label className="block mb-1.5">
              Region<span className="text-red-500">*</span>
            </label>
            <Controller
              name="region"
              control={control}
              rules={{ required: "Please select a region" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" aria-invalid={errors.region ? "true" : "false"}>
                    <SelectValue placeholder="Select a region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Philippine Regions</SelectLabel>
                      <SelectItem value="ncr">NCR - National Capital Region</SelectItem>
                      <SelectItem value="car">CAR - Cordillera Administrative Region</SelectItem>
                      <SelectItem value="region-i">Region I - Ilocos Region</SelectItem>
                      <SelectItem value="region-ii">Region II - Cagayan Valley</SelectItem>
                      <SelectItem value="region-iii">Region III - Central Luzon</SelectItem>
                      <SelectItem value="region-iv-a">Region IV-A - CALABARZON</SelectItem>
                      <SelectItem value="mimaropa">MIMAROPA Region</SelectItem>
                      <SelectItem value="region-v">Region V - Bicol Region</SelectItem>
                      <SelectItem value="region-vi">Region VI - Western Visayas</SelectItem>
                      <SelectItem value="region-vii">Region VII - Central Visayas</SelectItem>
                      <SelectItem value="region-viii">Region VIII - Eastern Visayas</SelectItem>
                      <SelectItem value="region-ix">Region IX - Zamboanga Peninsula</SelectItem>
                      <SelectItem value="region-x">Region X - Northern Mindanao</SelectItem>
                      <SelectItem value="region-xi">Region XI - Davao Region</SelectItem>
                      <SelectItem value="region-xii">Region XII - SOCCSKSARGEN</SelectItem>
                      <SelectItem value="region-xiii">Region XIII - Caraga</SelectItem>
                      <SelectItem value="barmm">BARMM - Bangsamoro Autonomous Region</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.region && (
              <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
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
              By submitting, I agree to the processing and transfer of my personal data by Aircon Experts as described in the Privacy Policy
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
