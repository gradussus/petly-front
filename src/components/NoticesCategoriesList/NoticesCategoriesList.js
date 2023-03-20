import { useSelector } from 'react-redux';
import noticesSelectors from '../../redux/notices/noticesSelectors';

const { selectNotices } = noticesSelectors;

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const noticesList = notices.result ? notices.result : [];
  return (
    <ul>
      {noticesList.map(itemData => {
        return <li key={itemData._id}>{itemData.name}</li>;
      })}
    </ul>
  );
};

export default NoticesCategoriesList;
