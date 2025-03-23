"use client"
import { useProfileStore } from '@/app/store/profile.store';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Switch } from '@/shared/components/ui/switch';
import React, { useEffect, useState } from 'react';

const Step2 = () => {
  const { profile, setProfile } = useProfileStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // const handleReviewUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const placeId = e.target.value;
  //   if(profile.review_url === ""){}
  //   const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
  //   setProfile({ ...profile, review_url: reviewUrl });
  // };

  const handleSwitchChange = (name: string) => (checked: boolean) => {
    setProfile({ ...profile, [name]: checked });
  };


  return (
    <div className="space-y-4 mt-4">
      <div>
        <Label>Review URL</Label>
        <Input
          name="review_url"
          value={profile.review_url}
          onChange={handleChange}
          placeholder="ลิงค์ review"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          checked={profile.is_review_redirect}
          onCheckedChange={handleSwitchChange('is_review_redirect')}
        />
        <Label>เปิด Review_Redirect</Label>
      </div>
      <div>
        <Label>Slug</Label>
        <Input
          name="slug"
          value={profile.slug}
          onChange={handleChange}
          placeholder="ลิงค์ review"
        />
      </div>
      <div>
        <Label>Website</Label>
        <Input
          name="website"
          value={'https://campaign.com/' + profile.slug}
          placeholder="website"
          readOnly
        />
      </div>
    </div>
  );
};

export default Step2;