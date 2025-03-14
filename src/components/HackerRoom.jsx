import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const HackerRoom = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/car.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (actions['Idle.1']) {
            actions['Idle.1'].play();
        }
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.379}>
                    <group
                        name="b7442e26e25842a8b9888e6c536fe8d3fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Car" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_78"
                                            geometry={nodes.Object_78.geometry}
                                            material={materials.Mat_Robot}
                                            skeleton={nodes.Object_78.skeleton}
                                        />
                                        <group name="Object_77" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                    </group>
                                </group>
                                <group name="Msh_Carro" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/car.glb')

export default HackerRoom;
