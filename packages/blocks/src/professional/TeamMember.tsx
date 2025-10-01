import React from 'react';
import { clsx } from 'clsx';

export interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  className?: string;
}

export function TeamMember({
  id,
  name,
  role,
  bio,
  photo,
  email,
  phone,
  socialLinks,
  className,
}: TeamMemberProps) {
  return (
    <div className={clsx('bg-white rounded-lg shadow-sm overflow-hidden', className)}>
      <img src={photo} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-display mb-1">{name}</h3>
        <p className="text-gold-600 text-sm font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>

        {(email || phone) && (
          <div className="space-y-2 mb-4 text-sm">
            {email && (
              <a href={`mailto:${email}`} className="block text-gray-700 hover:text-gold-600">
                Email: {email}
              </a>
            )}
            {phone && (
              <a href={`tel:${phone}`} className="block text-gray-700 hover:text-gold-600">
                Phone: {phone}
              </a>
            )}
          </div>
        )}

        {socialLinks && (
          <div className="flex gap-3 text-sm">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold-600">
                LinkedIn
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold-600">
                Twitter
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
