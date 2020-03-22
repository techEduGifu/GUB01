//% weight=100 color=#FF9933 icon="\uf0eb" block="拡張ボード（B01）"
namespace Board01 {
    //% blockId=B01_SwitchON
    //% block="SwitchON"
    //% block.loc.ja-JP="スイッチをオンにする"
    //% weight=80 blockGap=8
    export function SwitchON(): void {
        
        pins.digitalWritePin(DigitalPin.P1, 1)
    }

    //% blockId=B01_SwitchPWM
    //% block="SwitchON (%Value ％)"
    //% block.loc.ja-JP="スイッチをオンにする（%Value ％）"
    //% weight=80 blockGap=8 advanced=true
    //% Value.min=0 Value.max=100 Value.defl=100
    export function SwitchPWM(Value: number): void {
        let val = (Value * 1023) / 100;
        pins.analogWritePin(AnalogPin.P1, val)
    }

    //% blockId=B01_SwitchOFF
    //% block="SwithOFF"
    //% block.loc.ja-JP="スイッチをオフにする"
    //% weight=80 blockGap=8e
    export function SwitchOFF(): void {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    //% blockId=B01_Sensor
    //% block="IsDetected"
    //% block.loc.ja-JP="人感センサが反応した"
    //% weight=80 blockGap=8
    export function IsDetected(): boolean {
        if (pins.digitalReadPin(DigitalPin.P2) == 1)
            return true;
        return false;
    }
    
}