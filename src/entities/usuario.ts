import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";
import { Almacen } from "./almacen";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @ManyToOne(() => Rol, (rol) => rol.usuarios)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;

    @Column({ name: 'nombre_usuario' })
    nombreUsuario: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(() => Almacen, (almacen) => almacen.encargadoAlmacen)
    almacenesEncargados: Almacen[];
}