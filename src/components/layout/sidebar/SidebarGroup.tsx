import { IconType } from 'react-icons/lib';

import clsxm from '@/lib/clsxm';

import IconButton from '@/components/buttons/IconButton';

export interface SidebarItem {
  id: string;
  active?: boolean;
  icon: IconType;
  clickAction: () => void;
  className?: string;
}

export interface SidebarGroupProps {
  id: string;
  active?: string;
  items: SidebarItem[];
  className?: string;
}

function SidebarItem({ icon, active, clickAction, className }: SidebarItem) {
  return (
    <div className={clsxm(className)}>
      <IconButton
        className={active ? 'text-secondary-500 text-opacity-100' : ''}
        variant='secondary'
        icon={icon}
        onClick={() => clickAction()}
      />
    </div>
  );
}

export default function SidebarGroup({
  id,
  items,
  active,
  className,
}: SidebarGroupProps) {
  return (
    <div
      id={id}
      className={clsxm(
        className,
        'bg-dark-alt min-w-10 rounded-full text-center'
      )}
    >
      <ul>
        {items.map(({ id, icon, clickAction }, i) => (
          <li key={i}>
            <SidebarItem
              id={id}
              icon={icon}
              clickAction={clickAction}
              active={active === id}
              className='p-2'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
