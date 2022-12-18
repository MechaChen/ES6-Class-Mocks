import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

jest.mock('./sound-player');

beforeEach(() => {
    SoundPlayer.mockClear();
});

describe('SoundPlayerConsumer', () => {
    describe('when "new" a SoundPlayerConsumer', () => {
        it('should call SoundPlayer once', () => {
            // Arrange
            const soundPlayerConsumer = new SoundPlayerConsumer();
            // Act

            // Assert
            expect(SoundPlayer).toHaveBeenCalledTimes(1);
        })
    })

    describe('when call playSomething cool method of SoundPlayerConsumer instance', () => {
        it('should call playSoundFile method of SoundPlayer', () => {
            // Arrange
            const soundPlayerConsumer = new SoundPlayerConsumer();
            const mockPlaySoundFile = SoundPlayer.mock.instances[0].playSoundFile;

            // Act
            soundPlayerConsumer.playSomethingCool();

            // Assert
            expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
        })

        it('should call playSoundFile method of SoundPlayer with parameter', () => {
            // Arrange
            const soundPlayerConsumer = new SoundPlayerConsumer();
            const mockPlaySoundFile = SoundPlayer.mock.instances[0].playSoundFile;
            const coolFileName = 'song.mp3';

            // Act
            soundPlayerConsumer.playSomethingCool();

            // Assert
            expect(mockPlaySoundFile).toHaveBeenCalledWith(coolFileName);
        })
    })
})



