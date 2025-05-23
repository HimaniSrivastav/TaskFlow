import ActionDropdown from './ActionDropdown';
import UserAvatar from './UserAvatar';  
import RoleBadge from './RoleBadge';  


export default function UserRow ({ user, onEdit, onDelete, onView }){
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-4 py-4">
        <div className="flex items-center space-x-3">
          <UserAvatar name={user.name} />
          <span className="font-medium text-gray-900">{user.name}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-gray-600">
        {user.email}
      </td>
      <td className="px-4 py-4">
        <RoleBadge role={user.role} />
      </td>
      <td className="px-4 py-4 text-gray-600">
        {user.created}
      </td>
      <td className="px-4 py-4 text-center text-gray-600">
        {user.tasks}
      </td>
      <td className="px-4 py-4">
        <ActionDropdown 
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      </td>
    </tr>
  );
};