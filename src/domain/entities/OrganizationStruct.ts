export interface Member {
  name: string;
  role: string;
  photo?: string; // Optional now
}

export interface Division {
  name: string;
  head: string; // Nama Kepala Divisi
  members: string[]; // List Nama Anggota
  icon?: any; // Kept for backward compatibility if code uses it directly
  iconName?: string; // String identifier for JSON mapping
}

export interface OrganizationStructure {
  advisors: Member[];
  leaders: Member[];
  bph: Member[];
  divisions: Division[];
}
