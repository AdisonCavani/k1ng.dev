import { Tabs, TabsProps } from '@mantine/core'

const StyledTabs = (props: TabsProps) => {
  return (
    <Tabs
      unstyled
      styles={theme => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[3],
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 0,
          borderRadius: theme.radius.xl,

          transition: 'all .175s ease',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed'
          },

          '&': {
            marginRight: theme.spacing.xs,
            marginTop: theme.spacing.xs
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            color: theme.white
          }
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center'
        },

        tabsList: {
          display: 'flex',
          WebkitBoxPack: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }
      })}
      {...props}
    />
  )
}

export default StyledTabs
