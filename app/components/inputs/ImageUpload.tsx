'use client';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}
interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange],
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="xmazbjvm"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open()}
          className="
          relative 
          cursor-pointer 
          hover:opacity-70
          dark:hover:opacity-80
          transition 
          border-dashed
          border-2
          p-20
          border-neutral-300
          dark:border-neutral-600
          dark:hover:border-white
          flex 
          flex-col
          justify-center
          items-center
          gap-4
          text-neutral-600
          dark:text-neutral-50
          "
        >
          <TbPhotoPlus size={50} />
          <div className="font-semi text-lg">
            Click to upload
          </div>
          {value && (
             <div className="absolute inset-0 w-full h-full">
             <Image
                 alt='uploaded'
                 fill 
                 style={{ objectFit: 'cover'}}
                 src={value}
             />
           </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
