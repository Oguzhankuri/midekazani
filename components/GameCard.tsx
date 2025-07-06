"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  image: string;
  description: string;
}

export default function GameCard({ title, image, description }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col items-center gap-2"
    >
      <Image src={image} alt={title} width={200} height={120} className="rounded" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </motion.div>
  );
}
