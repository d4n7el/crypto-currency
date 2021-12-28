import { useTranslation } from 'react-i18next';

function Translate(data: string, upper: boolean) {
  const { t } = useTranslation();
  return upper ? t(data).toUpperCase() : t(data);
}

export default Translate;

Translate.defaultProps = {
  data: 'Hello Word',
  upper: false,
};
