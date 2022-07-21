import { instanceOf } from "prop-types"
import useSWR from "swr"
import AgendaDay from "~/components/calendar/AgendaDay"
import { fetchCalendar } from "~/dummyData/fetchCalendar"
import { calendarAsMap } from "~/middleware/calendarFormat"

const Agenda = ({ activeDate }) => {
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarAsMap],
    suspense: true,
  })

  // given date, return date and the next 6 days as an array of date objects
  const getWeek = (date) => {
    const week = []
    for (let i = 0; i < 7; i++) {
      week.push(
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
      )
    }
    return week
  }

  return (
    <>
      {getWeek(activeDate).map((date, idx) => (
        <AgendaDay
          key={idx}
          date={date}
          events={calendar.get(date.toISOString())?.events || []}
        />
      ))}
    </>
  )
}

Agenda.propTypes = {
  activeDate: instanceOf(Date).isRequired,
}

export default Agenda
