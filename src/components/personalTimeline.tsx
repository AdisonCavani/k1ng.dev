import { Timeline, Text } from '@mantine/core'
import {
  IconBackpack,
  IconBuildingCommunity,
  IconCake,
  IconSchool
} from '@tabler/icons'

const PersonalTimeline = () => {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2}>
      <Timeline.Item title="Birth" bullet={<IconCake size={14} />}>
        <Text color="secondary" size="sm">
          Born in Cracow, Poland
        </Text>
        <Text size="xs" mt={4}>
          January 15, 2003
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Technical college"
        bullet={<IconBackpack size={14} />}
      >
        <Text color="secondary" size="sm">
          Started the IT spacialist qualification in the Technical School no. 25
          in Cracow, Poland
        </Text>
        <Text size="xs" mt={4}>
          2019 to present
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Internship at SoftQ"
        lineVariant="dotted"
        bullet={<IconBuildingCommunity size={14} />}
      >
        <Text color="secondary" size="sm">
          Developed open-source{' '}
          <Text
            inherit
            variant="link"
            component="a"
            href="https://github.com/SCADA-LTS/Scada-LTS"
            target="_blank"
          >
            Scada-LTS software
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          February, 2022
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Graduated" bullet={<IconSchool size={14} />}>
        <Text color="secondary" size="sm">
          Graduated with INF.02 & INF.03 IT qualifications
        </Text>
        <Text size="xs" mt={4}>
          June, 2023
        </Text>
      </Timeline.Item>
    </Timeline>
  )
}

export default PersonalTimeline
