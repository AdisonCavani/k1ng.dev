import {
  TechStackCloudSchema,
  TechStackSoftwareSchema,
  TechStackToolsSchema,
  TechStackWebSchema
} from '@lib/techStackSchema'
import { createStyles, SimpleGrid, Tabs } from '@mantine/core'
import {
  IconCloudComputing,
  IconBrandChrome,
  IconDevices,
  IconTools
} from '@tabler/icons'
import StyledTabs from './styledTabs'
import TechIcon from './techIcon'

const BREAKPOINT_VALUE = 620

const useStyles = createStyles(theme => ({
  web: {
    '&[data-active]': {
      backgroundColor: theme.colors.red[1],
      color: '#822727'
    }
  },
  software: {
    '&[data-active]': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[0]
          : theme.colors.dark[9],
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[0]
    }
  },
  cloud: {
    '&[data-active]': {
      backgroundColor: theme.colors.blue[1],
      color: theme.colors.blue[8]
    }
  },
  tools: {
    '&[data-active]': {
      backgroundColor: theme.colors.green[1],
      color: theme.colors.teal[9]
    }
  }
}))

const TechStack = () => {
  const { classes } = useStyles()

  return (
    <StyledTabs defaultValue="web" unstyled>
      <Tabs.List>
        <Tabs.Tab
          value="web"
          className={classes.web}
          icon={<IconBrandChrome size={18} />}
        >
          Web
        </Tabs.Tab>
        <Tabs.Tab
          value="software"
          className={classes.software}
          icon={<IconDevices size={18} />}
        >
          Software
        </Tabs.Tab>
        <Tabs.Tab
          value="cloud"
          className={classes.cloud}
          icon={<IconCloudComputing size={18} />}
        >
          Cloud
        </Tabs.Tab>
        <Tabs.Tab
          value="tools"
          className={classes.tools}
          icon={<IconTools size={18} />}
        >
          Tools
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="web" pt="xs">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: BREAKPOINT_VALUE, cols: 1 }]}
        >
          {TechStackWebSchema.map((value, index) => {
            return <TechIcon key={index} {...value} />
          })}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="software" pt="xs">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: BREAKPOINT_VALUE, cols: 1 }]}
        >
          {TechStackSoftwareSchema.map((value, index) => {
            return <TechIcon key={index} {...value} />
          })}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="cloud" pt="xs">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: BREAKPOINT_VALUE, cols: 1 }]}
        >
          {TechStackCloudSchema.map((value, index) => {
            return <TechIcon key={index} {...value} />
          })}
        </SimpleGrid>
      </Tabs.Panel>

      <Tabs.Panel value="tools" pt="xs">
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: BREAKPOINT_VALUE, cols: 1 }]}
        >
          {TechStackToolsSchema.map((value, index) => {
            return <TechIcon key={index} {...value} />
          })}
        </SimpleGrid>
      </Tabs.Panel>
    </StyledTabs>
  )
}

export default TechStack
