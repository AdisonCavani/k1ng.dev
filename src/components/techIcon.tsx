import { Card, Center } from '@mantine/core'
import Image from 'next/image'

export type TechIconProps = {
  image: string
  alt: string
  href: string
}

const TechIcon = ({ image, alt, href }: TechIconProps) => {
  return (
    <Card
      shadow="xl"
      radius="lg"
      withBorder
      component="a"
      href={href}
      target="_blank"
      p="xs"
    >
      <Center>
        <Image
          src={image}
          alt={alt}
          width={60}
          height={60}
          style={{ borderRadius: 10 }}
        />
      </Center>
    </Card>
  )
}

export default TechIcon
