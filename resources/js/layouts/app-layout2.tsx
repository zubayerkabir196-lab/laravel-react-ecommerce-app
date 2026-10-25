import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout2';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout2({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {children}
        </AppLayoutTemplate>
    );
}