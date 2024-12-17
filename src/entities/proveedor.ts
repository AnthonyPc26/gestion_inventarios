import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedores')
export class Proveedor {
    @PrimaryGeneratedColumn({name: 'id_proveedor'})
    idProveedor: number;

    @Column({name: 'razon_social'})
    razonSocial: string;

    @Column({name: 'tipo_documento'})
    tipoDocumento: string;

    @Column({name: 'numero_documento'})    
    numeroDocumento: string;

    @Column({name: 'telefono'})
    telefono: string;

    @Column({name: 'correo'})
    correo: string;

    @Column({name: 'direccion'})
    direccion: string

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}