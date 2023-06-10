'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
  text?: string
  children?: any
  className?: string
  onClick?: () => void
}

const Buttons: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  children,
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.1, opacity: 0.8, background: '#15803d' }}
      whileTap={{ scale: 0.9, opacity: 0.6, background: '#047857' }}
    >
      {`${text} ${children}`}
    </motion.button>
  )
}

export default Buttons
