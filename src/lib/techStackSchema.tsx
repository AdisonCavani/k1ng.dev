import { TechIconProps } from '@components/techIcon'

import TypeScriptLogo from '@images/tech/typescript.svg'
import ReactJsLogo from '@images/tech/react.svg'
import NextJsLogo from '@images/tech/nextjs.svg'
import SassLogo from '@images/tech/sass.svg'
import MantineLogo from '@images/tech/mantine.svg'
import ChakraLogo from '@images/tech/chakra.svg'

import DotnetLogo from '@images/tech/dotnet.svg'
import RedisLogo from '@images/tech/redis.svg'
import PostgresLogo from '@images/tech/postgres.svg'
import RabbitMqLogo from '@images/tech/rabbitmq.svg'
import LinuxLogo from '@images/tech/linux.svg'
import SqlServerLogo from '@images/tech/sqlserver.svg'
import GitLogo from '@images/tech/git.svg'

import AwsLogo from '@images/tech/aws.svg'
import AwsCognitoLogo from '@images/tech/aws-cognito.svg'
import AwsIamLogo from '@images/tech/aws-iam.svg'
import AwsParameterStoreLogo from '@images/tech/aws-parameter-store.svg'
import SendGridLogo from '@images/tech/sendgrid.svg'
import GithubLogo from '@images/tech/github.svg'

import VisualStudioLogo from '@images/tech/visualstudio.svg'
import VsCodeLogo from '@images/tech/vscode.svg'
import RiderLogo from '@images/tech/rider.svg'
import DockerLogo from '@images/tech/docker.svg'
import K8sLogo from '@images/tech/k8s.svg'
import PostmanLogo from '@images/tech/postman.svg'

const TechStackWebSchema: TechIconProps[] = [
  {
    title: 'TypeScript',
    description: 'Typed superset of JS',
    href: 'https://www.typescriptlang.org',
    image: TypeScriptLogo,
    background: 'rgb(76, 164, 236)'
  },
  {
    title: 'React.js',
    description: 'JavaScript library',
    href: 'https://reactjs.org',
    image: ReactJsLogo,
    background: '#61dafb'
  },
  {
    title: 'Next.js',
    description: 'React web framework',
    href: 'https://nextjs.org',
    image: NextJsLogo,
    background: 'white'
  },
  {
    title: 'Sass',
    description: 'Preffered CSS preprocesor',
    href: 'https://sass-lang.com',
    image: SassLogo,
    background: '#c69'
  },
  {
    title: 'Mantine',
    description: 'React components library',
    href: 'https://mantine.dev',
    image: MantineLogo,
    background: '#339af0'
  },
  {
    title: 'Chakra UI',
    description: 'React components library',
    href: 'https://chakra-ui.com',
    image: ChakraLogo,
    background: '#7bcbd4'
  }
]

const TechStackSoftwareSchema: TechIconProps[] = [
  {
    title: 'Dotnet - C#',
    description: 'Cross-platform framework',
    href: 'https://dotnet.microsoft.com',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'ASP.NET',
    description: '.NET Web Framework',
    href: 'https://asp.net',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'WPF',
    description: '.NET GUI Framework',
    href: 'https://docs.microsoft.com/visualstudio/designers/getting-started-with-wpf',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'UWP',
    description: '.NET WinUI Framework',
    href: 'https://docs.microsoft.com/windows/uwp/get-started/universal-application-platform-guide',
    image: DotnetLogo,
    background: '#512bd4'
  },
  {
    title: 'PostgreSQL',
    description: 'Relational database',
    href: 'https://www.postgresql.org',
    image: PostgresLogo,
    background: '#336791'
  },
  {
    title: 'SQL Server',
    description: 'Relational database',
    href: 'https://www.microsoft.com/sql-server/sql-server-2019',
    image: SqlServerLogo,
    background: 'gray'
  },
  {
    title: 'Redis',
    description: 'In-memory database',
    href: 'https://redis.io',
    image: RedisLogo,
    background: '#cd5d57'
  },
  {
    title: 'RabbitMQ',
    description: 'Message broker',
    href: 'https://www.rabbitmq.com',
    image: RabbitMqLogo,
    background: '#ff6600'
  },
  {
    title: 'Git',
    description: 'Version control system',
    href: 'https://git-scm.com',
    image: GitLogo,
    background: '#f05133'
  },
  {
    title: 'Linux',
    description: 'Arch Linux, Debian & Fedora',
    href: 'https://www.kernel.org',
    image: LinuxLogo,
    background: '#e7bf5d'
  }
]

const TechStackCloudSchema: TechIconProps[] = [
  {
    title: 'Amazon Web Services',
    description: 'Cloud platform',
    href: 'https://aws.amazon.com',
    image: AwsLogo,
    background: '#232f3f'
  },
  {
    title: 'AWS Cognito',
    description: 'Authentication service',
    href: 'https://aws.amazon.com/cognito',
    image: AwsCognitoLogo,
    background: '#c17b9e'
  },
  {
    title: 'AWS IAM',
    description: 'Identity service',
    href: 'https://aws.amazon.com/iam',
    image: AwsIamLogo,
    background: '#759c3e'
  },
  {
    title: 'AWS Parameter Store',
    description: 'Secrets management service',
    href: 'https://aws.amazon.com/systems-manager',
    image: AwsParameterStoreLogo,
    background: '#759c3e'
  },
  {
    title: 'SendGrid',
    description: 'Twilio email service',
    href: 'https://sendgrid.com',
    image: SendGridLogo,
    background: '#1A82e2'
  },
  {
    title: 'Github',
    description: 'Cloud version control system',
    href: 'https://github.com',
    image: GithubLogo,
    background: 'white'
  }
]

const TechStackToolsSchema: TechIconProps[] = [
  {
    title: 'Visual Studio',
    description: 'IDE',
    href: 'https://visualstudio.microsoft.com',
    image: VisualStudioLogo,
    background: '#be90f3'
  },
  {
    title: 'Visual Studio Code',
    description: 'Code editor',
    href: 'https://code.visualstudio.com',
    image: VsCodeLogo,
    background: '#23aaf2'
  },
  {
    title: 'JetBrains Rider',
    description: 'Favourite IDE',
    href: 'https://code.visualstudio.com',
    image: RiderLogo,
    background: '#1875ef'
  },
  {
    title: 'Docker',
    description: 'Containerization software',
    href: 'https://www.docker.com',
    image: DockerLogo,
    background: '#2396ed'
  },
  {
    title: 'Kubernetes',
    description: 'Containers/pods management',
    href: 'https://kubernetes.io',
    image: K8sLogo,
    background: '#326ce5'
  },
  {
    title: 'Postman',
    description: 'API testing tool',
    href: 'https://www.postman.com',
    image: PostmanLogo,
    background: '#ff6c37'
  }
]

export {
  TechStackWebSchema,
  TechStackSoftwareSchema,
  TechStackCloudSchema,
  TechStackToolsSchema
}
