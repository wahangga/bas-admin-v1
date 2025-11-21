export const MENU_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:widget-5-bold-duotone',
    url: '/dashboard'
  },
  {
    key: 'event',
    label: 'Event',
    icon: 'solar:calendar-bold-duotone',
    children: [
      {
        key: 'event-list',
        label: 'Event List',
        url: '/event/event-list',
        parentKey: 'event'
      },
      {
        key: 'event-add',
        label: 'Create Event',
        url: '/event/event-add',
        parentKey: 'event'
      },
      {
        key: 'event-edit',
        label: 'Edit Event',
        url: '/event/event-edit',
        parentKey: 'event'
      },
      {
        key: 'event-details',
        label: 'Event Details',
        url: '/event/event-details',
        parentKey: 'event'
      }
    ]
  },
  {
    key: 'member',
    label: 'Member',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    children: [
      {
        key: 'member-list',
        label: 'Member List',
        url: '/member/member-list',
        parentKey: 'member'
      },
      {
        key: 'member-add',
        label: 'Create Member',
        url: '/member/member-add',
        parentKey: 'member'
      },
      {
        key: 'member-edit',
        label: 'Edit Member',
        url: '/member/member-edit',
        parentKey: 'member'
      },
      {
        key: 'member-details',
        label: 'Member Details',
        url: '/member/member-details',
        parentKey: 'member'
      }
    ]
  },
  {
    key: 'qr-code',
    label: 'QR Code',
    icon: 'solar:qr-code-bold-duotone',
    url: '/qr-code'
  },
  {
    key: 'finance',
    label: 'Finance',
    icon: 'solar:wallet-money-bold-duotone',
    children: [
      {
        key: 'membership',
        label: 'Membership',
        url: '/finance/membership',
        parentKey: 'finance'
      },
      {
        key: 'donation',
        label: 'Donation',
        url: '/finance/donation',
        parentKey: 'finance'
      }
    ]
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: 'solar:settings-bold-duotone',
    url: '/settings'
  }
];
