"use client"
import React, { useEffect, useState } from 'react'
import Stepper from './form/Stepper'
import Step1 from './form/step1'
import Step2 from './form/step2'
import { Button } from 'antd'
import { createProfile, getProfileById, updateProfile } from '../services/superbase.service'
import { useProfileStore } from '@/app/store/profile.store'
import { useRouter } from 'next/navigation'

const Register = ({ id }: {
    id?: number
}) => {
    const [step, setStep] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);
    const { profile, setProfile, clearProfile } = useProfileStore((state) => state);
    const router = useRouter();

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = async () => {
        const profileData = {
            profile_name: profile.profile_name,
            details: profile.details,
            address: profile.address,
            type: profile.type,
            phone: profile.phone,
            review_url: profile.review_url,
            is_review_redirect: profile.is_review_redirect,
            slug: profile.slug,
            time: profile.time,
            website: "https://campaign.com/" + profile.slug
        };

        const { data, error } = id
            ? await updateProfile(Number(id), profileData)
            : await createProfile(profileData);

        if (data) {
            router.push('/admin');
        }

        if (error) {
            console.error('Error saving profile:', error);
        }
    };
    useEffect(() => {
        return () => {
            clearProfile();
        };
    }, [id]);

    const steps = ['Step 1', 'Step 2'];
    return (
        <div className="w-full flex items-center justify-center">
            <div className="shadow-lg p-5 rounded-[20px] my-auto lg:w-[70vw] w-full ">
                <Stepper
                    setStep={setStep}
                    steps={steps} currentStep={step - 1} />
                {step === 1 && <Step1 error={error} setError={setError} />}
                {step === 2 && <Step2 />}
                <div className="flex justify-between mt-4">
                    {step !== 1 && <Button onClick={prevStep}>Back</Button>}
                    {step !== 2 && error && <Button onClick={nextStep}>Next</Button>}
                    {step === 2 && <Button onClick={handleSubmit}>Submit</Button>}
                </div>
            </div>
        </div>
    )
}

export default Register