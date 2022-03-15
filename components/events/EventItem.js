import Button from '../ui/Button'
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaArrowCircleRight,
} from 'react-icons/fa'

import classes from './EventItem.module.scss'

const EventItem = (props) => {
  const { title, image, date, location, id } = props

  const humanReadableDate = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(',', '\n')

  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <FaRegCalendarAlt />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <FaMapMarkerAlt />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <FaArrowCircleRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
