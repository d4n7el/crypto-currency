import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Translate from '../../components/translate';

const Page404 = () => {
  console.log(123456789);

  return (
    <div className="content-page-not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
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
