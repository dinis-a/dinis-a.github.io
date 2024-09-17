import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/dinis-a',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/dinis-akulov',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:akulov.dinis@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://t.me/dinis_n',
    label: 'Telegram',
    icon: faTelegram,
  },
];

export default data;
