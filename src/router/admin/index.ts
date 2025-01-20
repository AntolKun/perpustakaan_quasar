import { admin } from 'src/helpers/ListAkses'

export default {
  path: `/${admin.path}/`,
  meta: {
    requiredAuth: true,
    allowedRole: admin.value
  },
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      redirect: { name: 'dashboardAdmin' }
    },
    {
      path: 'dashboard',
      name: 'dashboardAdmin',
      component: () => import('pages/admin/Index.vue')
    },
    {
      path: 'kategoriBuku',
      name: 'kategoriBuku',
      component: () => import('pages/admin/buku/KategoriBuku.vue')
    },
    {
      path: 'dataBuku',
      name: 'dataBuku',
      component: () => import('pages/admin/buku/DataBuku.vue')
    },
    {
      path: 'peminjamanBuku',
      name: 'peminjamanBuku',
      component: () => import('pages/admin/pinjam_kembali/Peminjaman.vue')
    },
    {
      path: 'pengembalianBuku',
      name: 'pengembalianBuku',
      component: () => import('pages/admin/pinjam_kembali/Pengembalian.vue')
    }
  ]
}
