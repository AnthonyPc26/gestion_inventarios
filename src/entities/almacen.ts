import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { AreaAlmacen } from "./area-almacen";
import { Usuario } from "./usuario";

@Entity('almacenes')
export class Almacen {
    @PrimaryGeneratedColumn({ name: 'id_almacen' })
    idAlmacen: number;

    @Column({ name: 'nombre_almacen' })
    nombreAlmacen: string;

    @Column({ name: 'direccion' })
    direccion: string;

    @Column({ name: 'superficie', type: 'numeric' })
    superficie: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.almacenesEncargados)
    @JoinColumn({ name: 'encargado_almacen' })
    encargadoAlmacen: Usuario;

    @Column({ name: 'latitud', type: 'decimal', precision: 10, scale: 8 })
    latitud: number;

    @Column({ name: 'longitud', type: 'decimal', precision: 11, scale: 8 })
    longitud: number;

    @Column({ name: 'imagen_url'})
    imagenUrl: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @OneToMany(() => AreaAlmacen, (areaAlmacen) => areaAlmacen.almacen)
    areasAlmacen: AreaAlmacen[];
}