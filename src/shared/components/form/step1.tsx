"use client"
import { useProfileStore } from '@/app/store/profile.store';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { getAllProfilesType } from '@/shared/services/superbase.service';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"

interface Step1Props {
  error: boolean;
  setError: (value: boolean) => void;
}

const Step1: React.FC<Step1Props> = ({ error, setError }) => {
  const { profile, setProfile } = useProfileStore((state) => state);
  const [optionType, setOptionType] = useState<{
    id: number;
    name: string;
  }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    setError(value.length > 0);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    setError(value.length > 0);
  };

  const getOptionType = async () => {
    const data = await getAllProfilesType();
    setOptionType(data.data!)
  }

  useEffect(() => {
    getOptionType()
  }, [])

  return (
    <div className="space-y-4 mt-4">
      <div>
        <Label>ชื่อร้านค้า</Label>
        <Input
          name="profile_name"
          value={profile.profile_name}
          onChange={handleChange}
          placeholder="ชื่อร้านค้า"
        />
      </div>
      <div>
        <Label>ประเภทร้านค้า</Label>
        <Select
          name="type"
          value={String(profile.type)}
          onValueChange={(value) => {
            setProfile({ ...profile, type: value });
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="เลือกประเภทร้านค้า" />
          </SelectTrigger>
          <SelectContent>
            {optionType.map((type) => (
              <SelectItem key={type.id} value={String(type.id)}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>รายละเอียดร้าน</Label>
        <TextArea
          name="details"
          value={profile.details}
          onChange={handleTextChange}
          placeholder="รายละเอียดร้าน"
        />
      </div>
      <div>
        <Label>ที่อยู่</Label>
        <TextArea
          name="address"
          value={profile.address}
          onChange={handleTextChange}
          placeholder="ที่อยู่"
        />
      </div>

      <div>
        <Label>เบอร์โทรติดต่อ</Label>
        <Input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="เบอร์โทรติดต่อ"
        />
      </div>
      <div>
        <Label>เวลาเปิด-ปิดร้าน</Label>
        <Input
          name="time"
          value={profile.time}
          onChange={handleChange}
          placeholder="เวลาเปิด-ปิดร้าน"
        />
      </div>
    </div>
  );
};

export default Step1;