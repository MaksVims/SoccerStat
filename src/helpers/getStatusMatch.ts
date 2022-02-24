import { MATCH_STATUS } from "../types";

export default function getStatusMatch(status: MATCH_STATUS) {
  switch (status) {
    case MATCH_STATUS.FINISHED:
      return 'Завершен'
    case MATCH_STATUS.CANCELED:
      return 'Отменен'
    case MATCH_STATUS.IN_PLAY:
      return 'В игре'
    case MATCH_STATUS.LIVE:
      return 'В прямом эфире'
    case MATCH_STATUS.PAUSED:
      return 'Пауза'
    case MATCH_STATUS.POSTPONED:
      return 'Отложен'
    case MATCH_STATUS.SCHEDULED:
      return 'Запланирован'
    case MATCH_STATUS.SUSPENDED:
      return 'Приостановлен'
  }
}