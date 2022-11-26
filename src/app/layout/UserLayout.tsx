import * as PropTypes from 'prop-types'

UserLayout.propTypes = {
  children: PropTypes.node,
};

function UserLayout({ children }) {
  return(
    <div>
      {children}
    </div>
  );
}

export default UserLayout;