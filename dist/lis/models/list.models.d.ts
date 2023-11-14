export interface HL7_I {
    OUL_R24: OulR24;
}
export interface OulR24 {
    $: GeneratedType;
    MSH: Msh[];
    PID: Pid[];
    OBR: Obr[];
    ORC: Orc[];
    SPM: Spm[];
    OBX: Obx[];
}
export interface GeneratedType {
    OUL_R24: string;
    xmlns: string;
}
export interface Msh {
    "MSH.1": Msh1[];
    "MSH.2": Msh2[];
    "MSH.3": Msh3[];
    "MSH.4": Msh4[];
    "MSH.5": Msh5[];
    "MSH.6": Msh6[];
    "MSH.7": Msh7[];
    "MSH.8": Msh8[];
    "MSH.9": Msh9[];
    "MSH.10": Msh10[];
    "MSH.11": Msh11[];
    "MSH.12": Msh12[];
}
export interface Msh1 {
    "MSH.1.1": string[];
}
export interface Msh2 {
    "MSH.2.1": string[];
    "MSH.2.2": string[];
}
export interface Msh3 {
    "MSH.3.1": string[];
}
export interface Msh4 {
    "MSH.4.1": string[];
}
export interface Msh5 {
    "MSH.5.1": string[];
}
export interface Msh6 {
    "MSH.6.1": string[];
}
export interface Msh7 {
    "MSH.7.1": string[];
}
export interface Msh8 {
    "MSH.8.1": string[];
}
export interface Msh9 {
    "MSH.9.1": string[];
    "MSH.9.2": string[];
    "MSH.9.3": string[];
}
export interface Msh10 {
    "MSH.10.1": string[];
}
export interface Msh11 {
    "MSH.11.1": string[];
}
export interface Msh12 {
    "MSH.12.1": string[];
}
export interface Pid {
    "PID.1": Pid1[];
    "PID.2": Pid2[];
    "PID.3": Pid3[];
    "PID.4": Pid4[];
    "PID.5": Pid5[];
    "PID.6": Pid6[];
    "PID.7": Pid7[];
    "PID.8": Pid8[];
}
export interface Pid1 {
    "PID.1.1": string[];
}
export interface Pid2 {
    "PID.2.1": string[];
}
export interface Pid3 {
    "PID.3.1": string[];
}
export interface Pid4 {
    "PID.4.1": string[];
}
export interface Pid5 {
    "PID.5.1": string[];
}
export interface Pid6 {
    "PID.6.1": string[];
}
export interface Pid7 {
    "PID.7.1": string[];
}
export interface Pid8 {
    "PID.8.1": string[];
}
export interface Obr {
    "OBR.1": Obr1[];
    "OBR.2": Obr2[];
    "OBR.3": Obr3[];
    "OBR.4": Obr4[];
    "OBR.5": Obr5[];
    "OBR.6": Obr6[];
    "OBR.7": Obr7[];
    "OBR.8": Obr8[];
    "OBR.9": Obr9[];
    "OBR.10": Obr10[];
}
export interface Obr1 {
    "OBR.1.1": string[];
}
export interface Obr2 {
    "OBR.2.1": string[];
}
export interface Obr3 {
    "OBR.3.1": string[];
}
export interface Obr4 {
    "OBR.4.1": string[];
}
export interface Obr5 {
    "OBR.5.1": string[];
}
export interface Obr6 {
    "OBR.6.1": string[];
}
export interface Obr7 {
    "OBR.7.1": string[];
}
export interface Obr8 {
    "OBR.8.1": string[];
}
export interface Obr9 {
    "OBR.9.1": string[];
}
export interface Obr10 {
    "OBR.10.1": string[];
}
export interface Orc {
    "ORC.1": Orc1[];
    "ORC.2": Orc2[];
    "ORC.3": Orc3[];
    "ORC.4": Orc4[];
    "ORC.5": Orc5[];
    "ORC.6": Orc6[];
    "ORC.7": Orc7[];
    "ORC.8": Orc8[];
    "ORC.9": Orc9[];
    "ORC.10": Orc10[];
    "ORC.11": Orc11[];
    "ORC.12": Orc12[];
    "ORC.13": Orc13[];
    "ORC.14": Orc14[];
    "ORC.15": Orc15[];
    "ORC.16": Orc16[];
    "ORC.17": Orc17[];
    "ORC.18": Orc18[];
    "ORC.19": Orc19[];
}
export interface Orc1 {
    "ORC.1.1": string[];
}
export interface Orc2 {
    "ORC.2.1": string[];
}
export interface Orc3 {
    "ORC.3.1": string[];
}
export interface Orc4 {
    "ORC.4.1": string[];
}
export interface Orc5 {
    "ORC.5.1": string[];
}
export interface Orc6 {
    "ORC.6.1": string[];
}
export interface Orc7 {
    "ORC.7.1": string[];
}
export interface Orc8 {
    "ORC.8.1": string[];
}
export interface Orc9 {
    "ORC.9.1": string[];
}
export interface Orc10 {
    "ORC.10.1": string[];
}
export interface Orc11 {
    "ORC.11.1": string[];
}
export interface Orc12 {
    "ORC.12.1": string[];
}
export interface Orc13 {
    "ORC.13.1": string[];
}
export interface Orc14 {
    "ORC.14.1": string[];
}
export interface Orc15 {
    "ORC.15.1": string[];
}
export interface Orc16 {
    "ORC.16.1": string[];
}
export interface Orc17 {
    "ORC.17.1": string[];
}
export interface Orc18 {
    "ORC.18.1": string[];
}
export interface Orc19 {
    "ORC.19.1": string[];
}
export interface Spm {
    "SPM.1": Spm1[];
    "SPM.2": Spm2[];
    "SPM.3": Spm3[];
    "SPM.4": Spm4[];
    "SPM.5": Spm5[];
    "SPM.6": Spm6[];
    "SPM.7": Spm7[];
    "SPM.8": Spm8[];
    "SPM.9": Spm9[];
    "SPM.10": Spm10[];
    "SPM.11": Spm11[];
    "SPM.12": Spm12[];
    "SPM.13": Spm13[];
    "SPM.14": Spm14[];
    "SPM.15": Spm15[];
    "SPM.16": Spm16[];
    "SPM.17": Spm17[];
    "SPM.18": Spm18[];
    "SPM.19": Spm19[];
}
export interface Spm1 {
    "SPM.1.1": string[];
}
export interface Spm2 {
    "SPM.2.1": string[];
}
export interface Spm3 {
    "SPM.3.1": string[];
}
export interface Spm4 {
    "SPM.4.1": string[];
}
export interface Spm5 {
    "SPM.5.1": string[];
}
export interface Spm6 {
    "SPM.6.1": string[];
}
export interface Spm7 {
    "SPM.7.1": string[];
}
export interface Spm8 {
    "SPM.8.1": string[];
}
export interface Spm9 {
    "SPM.9.1": string[];
}
export interface Spm10 {
    "SPM.10.1": string[];
}
export interface Spm11 {
    "SPM.11.1": string[];
}
export interface Spm12 {
    "SPM.12.1": string[];
}
export interface Spm13 {
    "SPM.13.1": string[];
}
export interface Spm14 {
    "SPM.14.1": string[];
}
export interface Spm15 {
    "SPM.15.1": string[];
}
export interface Spm16 {
    "SPM.16.1": string[];
}
export interface Spm17 {
    "SPM.17.1": string[];
}
export interface Spm18 {
    "SPM.18.1": string[];
}
export interface Spm19 {
    "SPM.19.1": string[];
}
export interface Obx {
    "OBX.1": Obx1[];
    "OBX.2": Obx2[];
    "OBX.3": Obx3[];
    "OBX.4": Obx4[];
    "OBX.5": Obx5[];
    "OBX.6": Obx6[];
    "OBX.7": Obx7[];
    "OBX.8": Obx8[];
    "OBX.9": Obx9[];
    "OBX.10": Obx10[];
    "OBX.11": Obx11[];
}
export interface Obx1 {
    "OBX.1.1": string[];
}
export interface Obx2 {
    "OBX.2.1": string[];
}
export interface Obx3 {
    "OBX.3.1": string[];
}
export interface Obx4 {
    "OBX.4.1": string[];
}
export interface Obx5 {
    "OBX.5.1": string[];
}
export interface Obx6 {
    "OBX.6.1": string[];
}
export interface Obx7 {
    "OBX.7.1": string[];
}
export interface Obx8 {
    "OBX.8.1": string[];
}
export interface Obx9 {
    "OBX.9.1": string[];
}
export interface Obx10 {
    "OBX.10.1": string[];
}
export interface Obx11 {
    "OBX.11.1": string[];
}
export interface HL7_FIRESTORE {
    date: Date;
    value: HL7_I;
    id: string;
    id_lab: string;
}
