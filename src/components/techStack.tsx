import { Group } from '@mantine/core'
import TechIcon from './techIcon'

import AwsLogo from '@public/tech/aws.svg'
import DockerLogo from '@public/tech/docker.svg'
import DotnetLogo from '@public/tech/dotnet.svg'
import NextJsLogo from '@public/tech/nextjs-dark.svg'
import PostgresLogo from '@public/tech/postgres.svg'
import ReactLogo from '@public/tech/react.svg'
import RedisLogo from '@public/tech/redis.svg'
import TypescripLogo from '@public/tech/typescript.svg'

// TODO: add nextjs light logo based on theme
const TechStack = () => {
  return (
    <Group>
      <TechIcon image={AwsLogo} alt="AWS" href="https://aws.amazon.com" />
      <TechIcon image={DockerLogo} alt="Docker" href="https://www.docker.com" />
      <TechIcon
        image={DotnetLogo}
        alt="Dotnet"
        href="https://dotnet.microsoft.com"
      />
      <TechIcon image={NextJsLogo} alt="Next.JS" href="https://nextjs.org" />
      <TechIcon
        image={PostgresLogo}
        alt="PostgreSQL"
        href="https://www.postgresql.org"
      />
      <TechIcon image={ReactLogo} alt="React" href="https://reactjs.org" />
      <TechIcon image={RedisLogo} alt="Redis" href="https://redis.io" />
      <TechIcon
        image={TypescripLogo}
        alt="Typescript"
        href="https://www.typescriptlang.org"
      />
    </Group>
  )
}

export default TechStack
