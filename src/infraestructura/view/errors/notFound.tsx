import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Translate from '../../components/translate';

const Page404 = () => {
  return (
    <div className="content-page-not-found">
      <Result
        status="404"
        title="404"
        subTitle={Translate('msg404', false)}
        extra={
          <Link className="ant-btn ant-btn-primary" to={'/'}>
            {Translate('home', false)}
          </Link>
        }
      />
    </div>
  );
};
export default Page404;
