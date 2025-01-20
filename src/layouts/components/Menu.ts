import { Menu } from './types'

export const menus:Menu[] = [
  {
    to: 'dashboardAdmin',
    icon: 'grid_view',
    isDivider: false,
    isTitle: false,
    text: 'Dashboard'
  },
  {
    icon: 'book',
    isDivider: false,
    isTitle: false,
    text: 'Buku',
    child: [
      {
        icon: 'chevron_right',
        text: 'Kategori Buku',
        to: 'kategoriBuku'
      },
      {
        icon: 'chevron_right',
        text: 'Data Buku',
        to: 'dataBuku'
      }
    ]
  },
  {
    icon: 'apps',
    isDivider: false,
    isTitle: false,
    text: 'Pinjam & Kembali',
    child: [
      {
        icon: 'chevron_right',
        text: 'Peminjaman',
        to: 'peminjamanBuku'
      },
      {
        icon: 'chevron_right',
        text: 'Pengembalian',
        to: 'pengembalianBuku'
      }
    ]
  }
]
