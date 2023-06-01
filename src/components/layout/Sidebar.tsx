import clsxm from '@/lib/clsxm';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return <div className={clsxm(className)}>adw</div>;
}
