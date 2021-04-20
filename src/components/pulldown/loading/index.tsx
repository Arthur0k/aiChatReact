import './index.less';

const Loading = (props) => {
  return (
    <div className="loading">
      <span className="ant-spin-dot ant-spin-dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  );
};

export default Loading;
