'use client';
import Input from '@/components/input';
import Select from '@/components/select';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { formLink, formCode } from '@/constants/booking';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  newClient: yup.string().required('New client status is required'),
  tattooDescription: yup.string().required('Tattoo description is required'),
  placement: yup.string().required('Placement is required'),
  availability: yup.string().required('Availability is required'),
  referencePhotos: yup
    .mixed()
    .test(
      'minFiles',
      'At least one reference photo is required',
      (value: any) => value && value.length > 0
    )
    .test('fileSize', 'File Size is too large', (value: any) => {
      if (value && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].size > 5242880) {
            return false;
          }
        }
      }
      return true;
    })
    .test('fileType', 'Unsupported File Format', (value: any) => {
      if (value && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
          if (
            value[i].type != 'image/png' &&
            value[i].type != 'image/jpg' &&
            value[i].type != 'image/jpeg'
          ) {
            return false;
          }
        }
      }
      return true;
    }),

  message: yup.string(),
});

const newClients = [
  {
    value: 'yes',
    label: 'Yes',
  },
  {
    value: 'no',
    label: 'Return Client',
  },
];

const DetailsForm = ({ artist }: { artist: any }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        newClient,
        tattooDescription,
        placement,
        availability,
        referencePhotos,
        message,
      } = data;

      console.log(data);

      const url = new URL(location.href);
      const params = new URLSearchParams(url.searchParams);

      const artistSlug = params.get('artist') || 'contact-form';

      const code = formCode[artistSlug as keyof typeof formCode];
      const link = formLink[artistSlug as keyof typeof formLink];

      const formData = new FormData();
      formData.append('_wpcf7_unit_tag', code);
      formData.set(
        'your-subject',
        `Tattoo Request Form: New Request from ${firstName} ${lastName}`
      );
      formData.set('firstName', `${firstName}`);
      formData.set('lastName', `${lastName}`);
      formData.set('your-email', email);
      formData.set(
        'newClient',
        newClients.find((item) => item.value === newClient)?.label!
      );
      formData.set('phone', phone);
      formData.set('new-client', newClient);
      formData.set('tattooDescription', tattooDescription);
      formData.set('placement', placement);
      formData.set('availability', availability);

      if (referencePhotos && referencePhotos.length > 0) {
        for (let i = 0; i <= referencePhotos.length - 1; i++) {
          formData.append(`referencePhotos[${i}]`, referencePhotos[i]);
        }
      }

      const response = await axios.post(link, formData);

      if (response.status === 200) {
        toast({
          title: 'Success',
          description:
            'Your booking request has been successfully submitted. A member of our team will contact you shortly to confirm your appointment.',
          className: 'bg-green-400 text-white',
        });
        reset();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-3xl mb-2">Tattoo Request Form for {artist?.title}</h3>
      <p className="text-gray-200">
        <span className="font-bold">Share Your Details:</span> Provide your
        contact information and tattoo ideas to complete your booking.
      </p>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 gap-6 gap-y-10 w-full mt-10">
        <Input
          id="firstName"
          label="First Name"
          placeholder="First Name"
          error={errors.firstName}
          {...register('firstName')}
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          id="lastName"
          label="Last Name"
          placeholder="Last Name"
          error={errors.lastName}
          {...register('lastName')}
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          id="email"
          label="Email Address"
          placeholder="Your Email Address"
          {...register('email')}
          error={errors.email}
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          id="phone"
          label="Phone Number"
          placeholder="Your Phone Number"
          {...register('phone')}
          error={errors.phone}
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Select
          options={[
            {
              value: '',
              label: 'Please select one option*',
            },
            ...newClients,
          ]}
          {...register('newClient')}
          error={errors.newClient}
          id="newClient"
          // placeholder="Please select"
          className="sm:col-span-2"
          label="New Client?"
          inputClassName={cn(
            'input text-lg !px-4 !py-3 !text-base !text-black',
            !watch('newClient') && '!text-gray-400/90'
          )}
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          id="tattooDescription"
          placeholder="Tattoo Description"
          label="Tattoo Description"
          {...register('tattooDescription')}
          error={errors.tattooDescription}
          phoneInput
          textarea
          rows={4}
          className="sm:col-span-2"
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          id="placement"
          label="Placement on the Body"
          placeholder="Placement on the Body"
          error={errors.placement}
          {...register('placement')}
          className="sm:col-span-2"
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <Input
          type="file"
          {...register('referencePhotos')}
          multiple
          label="Reference Photos"
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          error={errors.referencePhotos}
          className="sm:col-span-2"
        />

        <Input
          id="availability"
          placeholder="Days you are usually free"
          label="Days you are usually free"
          {...register('availability')}
          error={errors.availability}
          phoneInput
          textarea
          rows={4}
          className="sm:col-span-2"
          inputClassName="input text-lg !px-4 !py-2 !text-base !text-black"
          messageClassName="absolute -bottom-6 !text-primary"
          required
        />

        <div className="sm:col-span-2 flex gap-4 lg:gap-x-1 gap-y-2 items-center mt-4 lg:mt-10 max-lg:justify-center">
          <Link href="/booking" scroll={false}>
            <Button variant="neutral" arrowLeft className="min-w-[6rem]">
              Back
            </Button>
          </Link>

          <Button
            type="submit"
            id="btn-submit-request"
            className="bg-white py-4 px-6 hover:opacity-80"
            arrow={false}>
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
